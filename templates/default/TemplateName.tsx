import React, { FC } from "react";

import style from "./TemplateName.module.scss";

export interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={style.templateName}>TemplateName component</div>;
};
