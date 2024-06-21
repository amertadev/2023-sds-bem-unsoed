import AvatarCircles from "@/components/magicui/avatar-circles";

const avatarUrls = [
    "https://media.licdn.com/dms/image/D5603AQF3KQhwmHTRbA/profile-displayphoto-shrink_400_400/0/1711938425088?e=1724284800&v=beta&t=GF-XOA2OX3_2AN5FAjqSwT6eNmSGM_nibRt6HSaB8qs",
    "https://media.licdn.com/dms/image/C5603AQH2h9XE8ysKtA/profile-displayphoto-shrink_400_400/0/1663483813920?e=1724284800&v=beta&t=gxe_Imi-lMocvown8nx7YiWfPooIiJABM_w5QkJNscg",
    "https://media.licdn.com/dms/image/D5603AQFykvrzdOIJRw/profile-displayphoto-shrink_400_400/0/1709258083186?e=1724284800&v=beta&t=hIwp8jIkK17aMshOxyQoOOzZn_jSNdTuRdR1eWnwq0Y",
    "https://media.licdn.com/dms/image/D5603AQGyLQ5QxCGjlA/profile-displayphoto-shrink_400_400/0/1709741726646?e=1724284800&v=beta&t=fusgTwpV79FiiIhL5DPDRq29uN8pD2y4d9KbD0tjn_w",
];

export async function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={84} avatarUrls={avatarUrls} />;
}