import { Request, Response } from "express";
import { Vars } from "../../../../global/vars";

export const getAppDetailsController = async (req: Request, res: Response) => {
  let appDetailsResponseObject: any = {
    app: {
      name: Vars.app.name,
      url: Vars.node.env === "prod" ? Vars.app.url.prod : Vars.app.url.dev,
      policy: {
        tos: { url: Vars.app.policy.tos.url },
        privacy: { url: Vars.app.policy.privacy.url },
        cancellationAndRefund: {
          url: Vars.app.policy.cancellationAndRefund.url,
        },
      },
      support: {
        email: Vars.app.support.email,
        url: Vars.app.support.url,
      },
      website: {
        url: Vars.app.website.url,
      },
      paymentGateway: Vars.app.paymentGateway,
    },
    business: {
      name: Vars.business.name,
      website: Vars.business.website,
      address: Vars.business.address,
      email: Vars.business.email,
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
