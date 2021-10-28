<script lang="ts">
import { useLocation, useNavigate } from "svelte-navigator";
import queryString from "query-string";
import { IdentityApi } from "../../../apis/identity/IdentityApi";
const navigate = useNavigate();

let identityApi: IdentityApi = new IdentityApi({
  url: "http://localhost:5001",
});
let confirmEmailAndRedirect = async () => {
  const parsed = queryString.parse(window.location.search);
  if (!parsed.email) {
    throw Error("callback without code");
  }
  if (!parsed.token) {
    throw Error("callback without token");
  }

  // confirm email, this also logs in the user.
  const emailResult = await identityApi.confirmEmail(
    parsed.email as string,
    parsed.token as string
  );
  if (!emailResult) {
    throw Error("email confirm failed");
    return;
  }

  // call register again, this time the user is logged in.
  // this should return the authorize link only.
  const registerResponse = await identityApi.fitbit.register({
    redirectUrl: "http://localhost:5000/fitbit/callback",
    confirmEmailUrl: "http://localhost:5000/fitbit/confirmemail",
  });

  // the response should be a url to redirect.
  if (registerResponse.emailSent) {
    // oeps, this is wrong!
    throw Error("this should not happen, user is logged in here");
    return;
  } else {
    window.location.href = registerResponse.url;
    return;
  }
};

let close = async () => {
  navigate("/");
};
</script>

{#await confirmEmailAndRedirect()}
  <div></div>
{/await}
