import React from "react";
import image1 from "../Assets/image-currency.jpg";
import image2 from "../Assets/image-confetti.jpg";
import image3 from "../Assets/image-restaurant.jpg";
import image4 from "../Assets/image-plane.jpg";
import LatestArticlesProps from "../Props/LatestArticlesProps";

const LatestArticles = () => {
  return (
    <section className="bg-gray-100/50 w-full py-16">
      <div className="w-9/12 mx-auto">
        <div className="my-12">
          <h1 className="text-4xl font-publicSans text-center md:text-center lg:text-start" >Latest Articles</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mx-auto">
          <LatestArticlesProps
            backgroundImage={image1}
            name="By Claire Robinson"
            heading="Receive money in any currency with no fees"
            p="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
          />
          <LatestArticlesProps
            backgroundImage={image2}
            name="By Claire Robinson"
            heading="Our invite-only Beta accounts are now live!"
            p=" After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ..."
          />
          <LatestArticlesProps
            backgroundImage={image3}
            name="By Claire Robinson"
            heading="Treat yourself without worrying about money"
            p=" Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …"
          />
          <LatestArticlesProps
            backgroundImage={image4}
            name="By Claire Robinson"
            heading="Take your Easybank card wherever you go"
            p=" We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
