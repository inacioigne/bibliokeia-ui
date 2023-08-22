interface Label {
    value: string;
    lang?: string;
  }

interface Element {
    type: string;
    elementValue: Label;
  }

interface Agent {
    fullerName?: Element;
  }