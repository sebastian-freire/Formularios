const { login, logout, isLoggedIn } = useUser();
const usernameInput = useRef(null);
const navigate = useNavigate();

const handleLoginClick = () => {
  const username = usernameInput.current.value;
  if (username.trim() === "") {
    return;
  }
  login(username);
  usernameInput.current.value = "";
  navigate("/quiz_selector");
};
const handleLogoutClick = () => {
  logout();
};
