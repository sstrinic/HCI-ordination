type params = {
    labels:string[];
}

const LabelLister: React.FC<params> = ({
    labels
  }) => {
    const getLabelColorClass = (label: any) => {
        switch (label) {
          case "world":
            return "bg-blue-500";
          case "local":
            return "bg-green-500";
          case "health":
            return "bg-red-500";
          case "other":
            return "bg-gray-500";
        }
      };
    return (
<div className="gap-2 flex py-3">
        {labels.map((label) => (
          <button key={label} className={`text-[19px] rounded-lg p-[3px] px-2 ${getLabelColorClass(label)}`}>
            {label}
          </button>
        ))}
      </div>
);
}

export default LabelLister;