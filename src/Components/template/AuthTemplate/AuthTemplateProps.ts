export interface AuthTemplateProps {
  title: string;
  description: string;
  image: string;
  authInfo: {
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
  FormComponent: React.ComponentType;
  noBack?: boolean;
}
