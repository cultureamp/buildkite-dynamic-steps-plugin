import { readEnv } from "read-env";
console.log(
  readEnv("BUILDKITE_PLUGIN_BUILDKITE_DYNAMIC_STEPS_PLUGIN_GIT", {
    separator: "_",
  })
);
