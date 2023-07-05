import { mount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";

describe("Spotlight", () => {
  const createGetMock = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...data,
        },
      ],
    });
  };

  it("provides img attribute to parent component", async () => {
    const data = { img: "Some image" };
    createGetMock({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{slotProps.img}}</h1>
             </template> `,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some image");
  });

  it("provides title attribute to parent component", async () => {
    const data = { title: "Some title" };
    createGetMock({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{slotProps.title}}</h1>
             </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some title");
  });
  it("provides description attribute to parent component", async () => {
    const data = { description: "Some description" };
    createGetMock({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
            <h1>{{slotProps.description}}</h1>
             </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("Some description");
  });
});
