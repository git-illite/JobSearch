import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates the user has entered a character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("A");
    input.setValue("AB");
    input.setValue("ABC");
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["A"], ["AB"], ["ABC"]]);
  });
});
