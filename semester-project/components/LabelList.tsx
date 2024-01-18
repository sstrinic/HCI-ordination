type params = {
    labels:string[];
}

const LabelLister: React.FC<params> = ({
    labels
  }) => {
    const getLabelColorClass = (label: any) => {
        switch (label) {
          case "world":
            return "bg-[#6FA3EF]";
          case "local":
            return "bg-[#A3D3A5]";
          case "health":
            return "bg-[#FBD3B0]";
          case "other":
            return "bg-[#D9D9D9]";
        }
      };
    return (
<div className="gap-2 flex py-3">
        {labels.map((label) => (
          <span key={label} className={`text-[19px] rounded-lg p-[3px] px-2 ${getLabelColorClass(label)}`}>
            {label}
          </span>
        ))}
      </div>
);
}

export default LabelLister;