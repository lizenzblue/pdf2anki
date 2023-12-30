<script>
    let active = 'home';
  </script>
  
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
        </ul>
      </div>
    </div>
  </nav>
  