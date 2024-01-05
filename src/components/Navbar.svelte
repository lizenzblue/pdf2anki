<script>
  import { authStore, authHandlers } from '../store/store';

  let active = 'home';
  const { user } = $authStore;
  let showMenu = false;

  // Function to toggle the menu visibility
  function toggleMenu() {
      showMenu = !showMenu;
  }
</script>

<style>
    .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: #1a202c;
        border: 1px solid #2d3748;
        border-radius: 0.25rem;
        padding: 0.5rem;
        display: blcok;
    }

  .dropdown-menu a {
      display: block;
      padding: 0.5rem;
      color: #cbd5e0;
      text-decoration: none;
      transition: background-color 0.3s ease-in-out;
  }

  .dropdown-menu a:hover {
      background-color: #2d3748;
  }
</style>


<nav class="bg-gray-900 p-4 mt-0 w-full">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="flex items-center">
          <a href="#" class="text-white text-lg font-bold no-underline hover:text-gray-300" on:click={() => active = 'home'}>
              📚 pdf2anki
          </a>
      </div>
      <div class="flex items-center">
          <ul class="flex list-none">
              <li class="mr-4">
                  <a class="text-gray-400 hover:text-white transition duration-300 ease-in-out {active === 'home' ? 'border-b-2 border-white' : ''}" href="#" on:click={() => active = 'home'}>
                    Home
                  </a>
              </li>
              <li class="mr-4">
                <a class="text-gray-400 hover:text-white transition duration-300 ease-in-out {active === 'about' ? 'border-b-2 border-white' : ''}" href="#" on:click={() => active = 'about'}>
                    About
                </a>
              </li>
              <li>
                 <a class="text-gray-400 hover:text-white transition duration-300 ease-in-out {active === 'contact' ? 'border-b-2 border-white' : ''}" href="#" on:click={() => active = 'contact'}>
                   Contact
                 </a>
              </li>
              <li class="ml-4 relative" on:mouseenter={toggleMenu} on:mouseleave="{() => showMenu = false}">
                  <!-- Use a button or another interactive element for accessibility -->
                  <img src={user?.photoURL} alt="User" class="w-8 h-8 rounded-full cursor-pointer" />
                  {#if showMenu}
                      <div class="dropdown-menu">
                          <a href="#" on:click|preventDefault={authHandlers.logout}>Logout</a>
                      </div>
                  {/if}
              </li>
          </ul>
      </div>
  </div>
</nav>

