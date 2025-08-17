import { lazy, useRef, useState } from "react";
import { X, UploadCloud, Bold, Italic, Underline, Link } from "lucide-react";

const Modal = lazy(() => import("./layout/Modal"));


// Data: Years 1990-2025, Themes/Subthemes, Institutions with dependent Courses & Products
const years = Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 1990 + i);

const themes = {
  "Maritime Studies": ["Strategy", "Operations", "Logistics"],
  "Leadership": ["Command", "Ethics", "Organisational Behavior"],
  "Technology": ["C4ISR", "Weapon Systems", "Autonomy"],
};

const institutions = {
  "Naval War College": {
    courses: ["Maritime Strategy", "Naval Warfare", "Blue Water Ops"],
    products: ["Course Report", "Simulator Output", "Tactical Paper"],
  },
  "ND School": {
    courses: ["Leadership", "Defense Planning"],
    products: ["Lecture Notes", "Policy Brief"],
  },
  "INA": {
    courses: ["Navigation", "Seamanship", "Weapon Systems"],
    products: ["Practical Logbook", "Training Guide"],
  },
};

const ResearchModal = ({ onClose, showModal }) => {
    const [year, setYear] = useState(2025);
    const [theme, setTheme] = useState("");
    const [subtheme, setSubtheme] = useState("");
    const [institution, setInstitution] = useState("");
    const [course, setCourse] = useState("");
    const [product, setProduct] = useState("");

    // text fields
    const [topicName, setTopicName] = useState("");
    const [shortName, setShortName] = useState("");

    // tags input
    const [tagText, setTagText] = useState("");
    const [tags, setTags] = useState([]);

    // file
    const [attachment, setAttachment] = useState(null);

    // rich text editor (contentEditable)
    const editorRef = useRef(null);

    // derived lists
    const availableSubthemes = theme ? themes[theme] || [] : [];
    const availableCourses = institution ? institutions[institution].courses : [];
    const availableProducts = institution ? institutions[institution].products : [];

    // handlers
    const handleInstitutionChange = (e) => {
        const inst = e.target.value;
        setInstitution(inst);
        // reset dependent selects
        setCourse("");
        setProduct("");
    };

    const handleThemeChange = (e) => {
        const th = e.target.value;
        setTheme(th);
        setSubtheme("");
    };

    const handleTagKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const val = tagText.trim();
            if (val && !tags.includes(val)) {
                setTags((t) => [...t, val]);
            }
            setTagText("");
        } else if (e.key === "Backspace" && !tagText && tags.length) {
            // remove last tag
            setTags((t) => t.slice(0, -1));
        }
    };

    const removeTag = (toremove) => {
        setTags((t) => t.filter((x) => x !== toremove));
    };

    const handleFileChange = (e) => {
        const f = e.target.files?.[0] || null;
        setAttachment(f);
    };

    const execCommand = (command) => {
        document.execCommand(command, false, null);
        // focus back to editor
        editorRef.current?.focus();
    };

    const setLink = () => {
        const url = prompt("Enter URL to link to:");
        if (url) document.execCommand("createLink", false, url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            year,
            theme,
            subtheme,
            institution,
            course,
            product,
            topicName,
            shortName,
            tags,
            summaryHtml: editorRef.current?.innerHTML || "",
            attachmentName: attachment?.name || null,
        };

        // Here you would normally POST payload to your API
        console.log("Submitting:", payload);
        alert("Form submitted — check console for payload (demo)");
        onClose();
    };

    return (
        <Modal onClose={onClose} isOpen={showModal}>
            <div className="w-full relative text-sm">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-blue-900">Submit Research / Studies</h2>

                <form className="space-y-4 max-h-[80vh] overflow-y-auto pr-2" onSubmit={handleSubmit}>
                    {/* Row: Year, Theme */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block">
                            <div className="text-xs font-medium mb-1">Year</div>
                            <select
                                value={year}
                                onChange={(e) => setYear(Number(e.target.value))}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                            >
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <div className="text-xs font-medium mb-1">Theme</div>
                            <select
                                value={theme}
                                onChange={handleThemeChange}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                            >
                                <option value="">Select Theme</option>
                                {Object.keys(themes).map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {/* Row: Subtheme, Institution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block">
                            <div className="text-xs font-medium mb-1">Subtheme</div>
                            <select
                                value={subtheme}
                                onChange={(e) => setSubtheme(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                                disabled={!availableSubthemes.length}
                            >
                                <option value="">Select Subtheme</option>
                                {availableSubthemes.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <div className="text-xs font-medium mb-1">Institution</div>
                            <select
                                value={institution}
                                onChange={handleInstitutionChange}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                            >
                                <option value="">Select Institution</option>
                                {Object.keys(institutions).map((inst) => (
                                    <option key={inst} value={inst}>
                                        {inst}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {/* Row: Course, Product (dependent on Institution) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block">
                            <div className="text-xs font-medium mb-1">Course</div>
                            <select
                                value={course}
                                onChange={(e) => setCourse(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                                disabled={!availableCourses.length}
                            >
                                <option value="">Select Course</option>
                                {availableCourses.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block">
                            <div className="text-xs font-medium mb-1">Product</div>
                            <select
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-blue-500"
                                disabled={!availableProducts.length}
                            >
                                <option value="">Select Product</option>
                                {availableProducts.map((p) => (
                                    <option key={p} value={p}>
                                        {p}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    {/* Topic Name, Short Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Topic Name"
                            value={topicName}
                            onChange={(e) => setTopicName(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Short Name"
                            value={shortName}
                            onChange={(e) => setShortName(e.target.value)}
                            className="w-full p-2 border rounded focus:outline-blue-500"
                        />
                    </div>

                    {/* Tags input */}
                    <div>
                        <div className="text-xs font-medium mb-1">Tags</div>
                        <div className="flex items-center flex-wrap gap-2">
                            {tags.map((t) => (
                                <div
                                    key={t}
                                    className="flex items-center bg-blue-100 text-blue-900 px-2 py-1 rounded-full text-xs"
                                >
                                    <span className="mr-2">{t}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeTag(t)}
                                        className="text-xs hover:text-red-500"
                                        aria-label={`Remove tag ${t}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}

                            <input
                                placeholder="Type tag and press Enter or comma"
                                value={tagText}
                                onChange={(e) => setTagText(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                                className="p-2 border rounded focus:outline-blue-500 flex-1 min-w-[160px]"
                            />
                        </div>
                    </div>

                    {/* Summary / Comments - rich text editor */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-medium">Summary / Comments</div>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => execCommand("bold")}
                                    title="Bold"
                                    className="p-2 rounded hover:bg-gray-100"
                                >
                                    <Bold className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => execCommand("italic")}
                                    title="Italic"
                                    className="p-2 rounded hover:bg-gray-100"
                                >
                                    <Italic className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => execCommand("underline")}
                                    title="Underline"
                                    className="p-2 rounded hover:bg-gray-100"
                                >
                                    <Underline className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={setLink}
                                    title="Insert link"
                                    className="p-2 rounded hover:bg-gray-100"
                                >
                                    <Link className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div
                            ref={editorRef}
                            contentEditable
                            suppressContentEditableWarning
                            className="min-h-[140px] p-3 border rounded focus:outline-blue-500 overflow-auto"
                            style={{ whiteSpace: "pre-wrap" }}
                        />
                    </div>

                    {/* Attachment */}
                    <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center w-full p-4 border-2 border-dashed border-blue-300 rounded cursor-pointer bg-blue-50 hover:bg-blue-100 transition text-blue-700"
                    >
                        <UploadCloud className="w-5 h-5 mr-2" />
                        <span>{attachment ? attachment.name : "Click or drag file to upload (.pdf, .doc, .xlsx, .jpg)"}</span>
                        <input
                            id="file-upload"
                            type="file"
                            accept=".pdf,.doc,.docx,.xlsx,.xls,.png,.jpg,.jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </label>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 rounded bg-blue-900 text-white hover:bg-blue-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ResearchModal;