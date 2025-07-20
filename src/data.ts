import {
    ConsolePlusLogo, DevLensLogo, DomSnapshotLogo, GridGuidesLogo, JsonWizardLogo,
    LinkCheckerLogo, MarkupNotesLogo, PalettePickerLogo, SpeedBoostLogo, StyleSpyLogo,
    TabMasterLogo, ViewportBuddyLogo
} from "./assets";

export const data = [
    {
        logo: DevLensLogo,
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true
    },
    {
        logo: StyleSpyLogo,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true
    },
    {
        logo: SpeedBoostLogo,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false
    },
    {
        logo: JsonWizardLogo,
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true
    },
    {
        logo: TabMasterLogo,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true
    },
    {
        logo: ViewportBuddyLogo,
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false
    },
    {
        logo: MarkupNotesLogo,
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true
    },
    {
        logo: GridGuidesLogo,
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false
    },
    {
        logo: PalettePickerLogo,
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true
    },
    {
        logo: LinkCheckerLogo,
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true
    },
    {
        logo: DomSnapshotLogo,
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false
    },
    {
        logo: ConsolePlusLogo,
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true
    }
];
