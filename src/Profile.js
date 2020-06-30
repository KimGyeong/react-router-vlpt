import React from 'react';

const profileData = {
    velopert: {
        name: '김민준',
        description:
            'Frontend Enginner @ Laftel Inc. 재밌는 것만 골라서 하는 개발자'
    },
    lilbear: {
        name: '작은곰',
        description:
            '풀스택 개발자를 꿈꾸는 곰. 하기 싫은 것은 안하는 편'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;