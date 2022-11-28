import { useQuery } from "@tanstack/react-query";
import React from "react";

const ApplyActionModal = () => {
  const onHandleModalData = (data) => {
    console.log(data);
  };

  const { data: modalData } = useQuery({
    queryKey: ["modalData"],
    queryFn: async () => {
      const res = await fetch(
        " https://buy-sell-car-store-server.vercel.app/all-car"
      );
      const data = await res.json();
      return data;
    },
  });

  return <div></div>;
};

export default ApplyActionModal;
