import { Request, Response } from "express";
import { AppVar } from "../../../../global/vars";

export const getAppDetailsController = async (req: Request, res: Response) => {
  let appDetailsResponseObject: any = {
    app: {
      name: AppVar.app.name,
      url:
        AppVar.node.env === "prod" ? AppVar.app.url.prod : AppVar.app.url.dev,
      policy: {
        tos: { url: AppVar.app.policy.tos.url },
        privacy: { url: AppVar.app.policy.privacy.url },
        cancellationAndRefund: {
          url: AppVar.app.policy.cancellationAndRefund.url,
        },
      },
      support: {
        email: AppVar.app.contact.email,
        url: AppVar.app.contact.url,
      },
      website: {
        url: AppVar.app.website.url,
      },
      paymentGateway: AppVar.app.paymentGateway,
    },
    business: {
      name: AppVar.app.owner.name,
      website: AppVar.app.owner.website,
      address: AppVar.app.owner.contact.address,
      email: AppVar.app.owner.contact.email,
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
