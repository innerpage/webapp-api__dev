import { Request, Response, NextFunction } from "express";

export const middleware_Format_Publisher_EnrollInputs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let {
    business_name,
    business_address,
    product_name,
    support_email,
    website,
    country,
    state,
    tax_type,
    tax_id,
    tax_value,
  } = req.body;

  res.locals.business_name = business_name.trim();
  res.locals.business_address = business_address.trim();
  res.locals.product_name = product_name.trim();
  res.locals.support_email = support_email.trim().toLowerCase();
  res.locals.website = website.trim();
  res.locals.country = country.trim();
  res.locals.state = state.trim();
  res.locals.tax_type = tax_type.trim();
  res.locals.tax_id = tax_id.trim();
  res.locals.tax_value = tax_value.trim();

  next();
};
