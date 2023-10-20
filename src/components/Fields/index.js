import CheckBox from "./CheckBox";
import TextBox from "./TextBox";
import Select from "./Select";
import { Herr_Von_Muellerhoff } from "next/font/google";

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
  WeekField,
 

};

// https://www.behance.net/gallery/177185839/Restaurant-POS-System-(Retail-Management-System)?tracking_source=search_projects|design+system
// https://www.behance.net/gallery/127252161/Data-tables-design-system-Free-set-for-Figma?tracking_source=search_projects|design+system
// Ref : https://www.behance.net/gallery/161215951/Eos-Design-System-UI-kit-Library
// Button States
// Enabled
// Disabled
// Hover
// Pressed
// Processing

// Checkbox
// unselected
// selected
// interminate
// inactive unselected
// inactive selected
// inactive interminate

//  Radio Button
// unselcted
// selected
// inactive unselcted
// inactive  selected

//  Switch
// inactive
// active
// inactive disabled
// active disabled
