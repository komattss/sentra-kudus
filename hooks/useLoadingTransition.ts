import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export const useLoadingTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTransition = useCallback(
    async (callback: () => Promise<void>, redirectPath: string) => {
      try {
        setIsLoading(true);
        await callback();
        // Give time for loading animation to show
        await new Promise((resolve) => setTimeout(resolve, 800));
        router.push(redirectPath);
        router.refresh();
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    },
    [router]
  );

  return { isLoading, handleTransition };
};
