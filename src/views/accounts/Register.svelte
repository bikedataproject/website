<script lang="ts">
    import { IdentityApi } from "../../apis/identity/IdentityApi";

    let email: string;
    let password: string;

    let identityApi = new IdentityApi({
        url: "http://localhost:5001",
    });

    async function register() {
        await identityApi.register({
            email: email,
            functionalName: email,
            password: password,
        });
    }
</script>

<div>
    <div class="mb-3">
        <label for="registerEmail" class="form-label">Email address</label>
        <input
            type="email"
            class="form-control"
            id="registerEmail"
            aria-describedby="emailHelp"
            bind:value={email}
        />
        <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
        </div>
    </div>
    <div class="mb-3">
        <label for="registerPassword" class="form-label">Password</label>
        <input
            type="password"
            class="form-control"
            id="registerPassword"
            bind:value={password}
        />
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button
        type="submit"
        class="btn btn-primary"
        on:click={async () => await register()}>Submit</button
    >
</div>
