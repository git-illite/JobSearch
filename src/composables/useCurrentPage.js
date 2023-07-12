import { useRoute } from "vue-router";
import { computed } from "vue";
const useCurrentPage = () => {
  const route = useRoute();
  return computed(() => Number.parseInt(route.query.page || "1"));
};
export default useCurrentPage;
