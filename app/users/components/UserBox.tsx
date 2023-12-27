"use client";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

type Props = {
  data: User;
};

const UserBox = ({ data }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = useCallback(async () => {
    setIsLoading(true);

    const res = await axios.post("/api/conversations", {
      userId: data.id,
    });

    router.push(`/conversations/${res.data.id}`);

    setIsLoading(false);
  }, [data, router]);

  return <div>UserBox</div>;
};

export default UserBox;
