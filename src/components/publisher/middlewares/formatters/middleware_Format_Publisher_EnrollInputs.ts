import { Request, Response, NextFunction } from "express";

export const middleware_Format_Publisher_EnrollInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let {
    business_Name,
    business_Address,
    product_Name,
    support_Email,
    url_Website,
    url_Dl,
    country,
    state,
    tax_Type,
    id_Tax,
    value_Tax,
  } = req.body;

  res.locals.business_Name = business_Name.trim();
  res.locals.business_Address = business_Address.trim();
  res.locals.product_Name = product_Name.trim();
  res.locals.support_Email = support_Email.trim().toLowerCase();
  res.locals.url_Website = url_Website.trim();
  res.locals.url_Dl = url_Dl.trim();
  res.locals.country = country.trim();
  res.locals.state = state.trim();
  res.locals.tax_Type = tax_Type.trim();
  res.locals.id_Tax = id_Tax.trim();
  res.locals.value_Tax = value_Tax;

  next();
};
