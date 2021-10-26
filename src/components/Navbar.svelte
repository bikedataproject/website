<script>
    import { Link } from "svelte-navigator";
</script>

<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
            <Link class="nav-link m-2" to="datamap">The Data</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link m-2" to="faq">FAQ</Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link m-2" to="about">About</Link>
        </li>
        <li class="nav-item">
            <button type="button" class="btn btn-primary m-2" href="#">Participate</button>
        </li>
    </ul>
</div>
