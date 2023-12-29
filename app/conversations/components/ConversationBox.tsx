"use client";

import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import useOtherUser from "@/app/hooks/useOtherUser";

type Props = {
  data: FullConversationType;
  selected?: boolean;
};

const ConversationBox = ({ data, selected }: Props) => {
  const router = useRouter();
  const session = useSession();
  const otherUser = useOtherUser(data);

  const userEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((item) => item.email === userEmail).length !== 0;
  }, [data.messages]);

  return <div className="">ConversationBox</div>;
};

export default ConversationBox;
