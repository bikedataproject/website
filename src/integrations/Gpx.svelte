<script lang="ts">
    import { Button, Modal, FormGroup, Input, Label } from "sveltestrap";
    let isOpen = false;
    const toggle = () => (isOpen = !isOpen);

    const link = () => {
        isOpen = false;
        console.log("yes please, link.");
    }
</script>

<Button class="btn-share w-100 disabled" on:click={toggle}>GPX</Button>
<Modal body {isOpen} {toggle} header="Thanks for sharing your Strava data!">
    <p>
        When linking your Fitbit account BikeDataProject gets access to your
        cycling data. Any cycling trips you do with your Fitbit device gets
        shared automatically with BikeDataProject.
    </p>
    <FormGroup>
        <Label for="email">Email</Label>
        <Input
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
        />
    </FormGroup>
    <p>
        Your link with Fitbit will not last forever, we use your email address only to notify you when your link to the BikeDataProject is broken. You can leave your email address blank but then we won't be able to notify you if data sharing is turned off.
    </p>
    <Button color="secondary" on:click={link}>Link my account.</Button>
</Modal>