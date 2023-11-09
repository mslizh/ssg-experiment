import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "9GRWy5XS4t2UiSSgpmVpmn",  // ID of a project you are using
      token: "Afrju4xX7qyXbg0RmNRSFzKINfQ6v33JrWrygGtOlFgUlmyI9kLO9C69aTk1SIpfkT1cVaJOoYV2CjGiFrYyQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})