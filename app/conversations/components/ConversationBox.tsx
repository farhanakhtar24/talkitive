"use client";

import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";

type Props = {
  data: FullConversationType;
  selected?: boolean;
};

const ConversationBox = ({ data, selected }: Props) => {
  const router = useRouter();

  return <div>ConversationBox</div>;
};

export default ConversationBox;
