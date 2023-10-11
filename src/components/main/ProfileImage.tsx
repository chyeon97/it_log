import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const PROFILE_IMAGE_LINK = 'https://github.com/chyeon97/it_log/assets/40657327/76e895ae-0ebf-49d8-98dd-55518cca4c2c'


const ProfileImageWrapper = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
`;

const ProfileImage: FunctionComponent = () => {
	return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage