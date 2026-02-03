// src/content/specContent.ts

export function getSpecContent(type: string) {
  switch (type) {
    case "aerodynamics":
      return {
        description: "Our linear diffusers maintain laminar airflow even at high velocities. Tested in acoustic chambers to ensure compliance with ISO 3741.",
        data: [
          { label: "Noise Criteria", value: "< 25 dB(A) @ 3 m/s" },
          { label: "Pressure Drop", value: "15 Pa @ 200 m³/h" }
        ]
      };
    case "installation":
      return {
        description: "Compatible with all major ceiling systems including Knauf, Gyproc, and Armstrong. Includes patented \"Click-Fix\" mechanism for tool-less installation.",
        list: [
          "Frame Type A (Hidden)",
          "Frame Type B (Visible 10mm)",
          "Plenum Box Height: 250mm"
        ]
      };
    case "materials":
      return {
        description: "Extruded aluminum alloy 6063-T6. Powder coated with UV-resistant epoxy polyester.",
        action: "Download Datasheet"
      };
    default:
      return null;
  }
}
