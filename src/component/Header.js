export default function Header(userInfo) {
    return (
    <p>{userInfo.name}님 현재 시각은 {new Date().toLocaleTimeString()}입니다.</p>
   );
}