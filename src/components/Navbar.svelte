<script>
import { Link } from "svelte-navigator";
import { _ } from "svelte-i18n";
</script>

<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ms-auto">
    <li class="nav-item active">
      <Link class="nav-link m-2" to="datamap">{$_("The_data")}</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link m-2" to="faq">{$_("FAQ")}</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link m-2" to="about">{$_("About")}</Link>
    </li>
    <li class="nav-item">
      <a class="nav-link m-2" href="https://wiki.bikedataproject.org/">{$_("Wiki")}</a>
    </li>
    <li class="nav-item">
      <a type="button" class="btn btn-primary m-2" href="#share-section"
        >{$_("Contribute")}</a>
    </li>
  </ul>
</div>
