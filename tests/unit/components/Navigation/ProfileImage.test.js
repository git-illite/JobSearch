import { shallowMount } from "@vue/test-utils";
import ProfileImage from "@/components//Navigation/ProfileImage";

describe("ProfileImage", () => {
  it("it renders an image", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
