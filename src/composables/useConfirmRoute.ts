import { computed } from "vue";
import { useRoute } from "vue-router";

const useConfirmRoute = (routeName: string) => {
  const route = useRoute();
  return computed(() => route.name === routeName);
};
export default useConfirmRoute;
