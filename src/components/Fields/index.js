import CheckBox from "./CheckBox";
import TextBox from "./TextBox";
import Select from "./Select";

const NumberBox = (props) => (
  <TextBox className="w-36" type="number" min="0" {...props} />
);
const Email = (props) => <TextBox type="email" {...props} />;
const UrlField = (props) => <TextBox type="url" {...props} />;
const DateField = (props) => <TextBox type="date" {...props} />;
const FileField = (props) => <TextBox type="file" {...props} />;
const TimeField = (props) => <TextBox type="time" {...props} />;
const WeekField = (props) => <TextBox type="week" {...props} />;

export {
  CheckBox,
  TextBox,
  Select,
  NumberBox,
  Email,
  UrlField,
  DateField,
  TimeField,
  FileField,
  WeekField
};
