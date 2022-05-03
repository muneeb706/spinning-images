import ImageCard from "../components/ImageCard";

export default {
  title: "components/ImageCard",
  component: ImageCard,
  argTypes: { onClick: { action: "Image Container on click handler" } },
};

const Template = (args) => <ImageCard {...args} />;

export const GrandCanyonImageCard = Template.bind({});

GrandCanyonImageCard.args = {
  src: "https://www.undercanvas.com/wp-content/uploads/2021/07/Grand-Canyon-scaled.jpg",
  alt: "Grand Canyon",
};
