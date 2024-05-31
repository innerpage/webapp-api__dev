import { Request, Response } from "express";
import { ConfigVar } from "../../../../global/vars";

export const getAppDetailsController = async (req: Request, res: Response) => {
  let appDetailsResponseObject: any = {
    app: {
      name: ConfigVar.app.name,
      url:
        ConfigVar.node.env === "prod"
          ? ConfigVar.app.url.prod
          : ConfigVar.app.url.dev,
      policy: {
        tos: { url: ConfigVar.app.policy.tos.url },
        privacy: { url: ConfigVar.app.policy.privacy.url },
        cancellationAndRefund: {
          url: ConfigVar.app.policy.cancellationAndRefund.url,
        },
      },
      support: {
        email: ConfigVar.app.contact.email,
        url: ConfigVar.app.contact.url,
      },
      website: {
        url: ConfigVar.app.website.url,
      },
      paymentGateway: ConfigVar.app.paymentGateway,
    },
    business: {
      name: ConfigVar.business.name,
      website: ConfigVar.business.website,
      address: ConfigVar.business.contact.address,
      email: ConfigVar.business.contact.email,
    },
    origin: {
      country: res.locals.originCountry,
    },
  };

  return res.status(200).json({
    success: true,
    message: "✅ Fetched app details",
    payload: appDetailsResponseObject,
  });
};
