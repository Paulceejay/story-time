import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { supabase } from "../lib/supabase"; 
import { Session, User } from "@supabase/supabase-js";

type Profile = {
  id: string;
  avatar_url: string | undefined;
  email: string | undefined;
  full_name?: string | undefined;
};

export const useUserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error || !user) {
          Alert.alert("Error", "Please login to view profile");
          setLoading(false);
          return;
        }

        setUser(user);

        const { data, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) {
          setProfile({
            id: user.id,
            avatar_url: user.avatar_url,
            email: user.email,
          });
        } else {
          setProfile(data || {
            id: user.id,
            avatar_url: null,
            email: user.email,
            full_name: data.full_name
          });
        }
      } catch (error) {
        Alert.alert("Error", "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return {
    user,
    profile,
    setProfile,
    loading,
  };
};
