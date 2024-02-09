<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.php">Back</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/userPart/views/create.php">Create</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/userPart/users.php">See All</a>
                </li>
            </ul>
            <form id="searchFormUsers" class="d-flex" role="search">
                <input id="searchInputUser" name="applicantsName" class="form-control me-2" type="search" placeholder="Search by name..." aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

        </div>
    </div>

</nav>
<script src="/userPart/scripts/search.js" type="module"></script>