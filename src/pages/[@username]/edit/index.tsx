import { EditProfilePage, editProfileServerSideProps } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPage } from "next";
import React from "react";

const UserProfileEdit: NextPage = () => {
	return <EditProfilePage />;
};

(UserProfileEdit as PageWithLayoutType).layout = BaseLayout;

export const getServerSideProps = editProfileServerSideProps;

export default UserProfileEdit;
