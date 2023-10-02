export type LineKey = {
  line_number: number;
  type: number;
  line_value: number;
  value: string;
  label: string;
};

export const defaultLineKey: LineKey = {
  line_number: 0,
  type: 0,
  line_value: 1,
  value: "0",
  label: "John Doe",
};

export type ExpansionKey = {
  module_number: number;
  line_number: number;
  type: number;
  line_value: number;
  value: string;
  label: string;
};

export const defaultExpansionKey: ExpansionKey = {
  module_number: 1,
  line_number: 0,
  type: 0,
  line_value: 1,
  value: "0",
  label: "John Doe",
};

export type Account = {
  account_number: number;
  label: string;
  display_name: string;
  authorization_name: string;
  password: string;
  username: string;
  sip_server_host: string;
  sip_server_port: number;
  cid_source: number;
  cp_source: number;
  proxy_enable: boolean;
  proxy_outbound_host: string;
  proxy_outbound_port: number;
  sip_trans_type: number;
  srtp_encryption_option: number;
  session_timer_refresher: number;
  session_timer_enable: boolean;
  session_timer_expire: number;
};

export const YealinkAccount: Account = {
  account_number: 1,
  label: "[DISPLAY_NAME]",
  display_name: "[DISPLAY_NAME]",
  authorization_name: " [EXTENSION]",
  password: "[PASSWORD]",
  username: "[EXTENSION]",
  sip_server_host: "[SERVER]",
  sip_server_port: 0,
  cid_source: 4,
  cp_source: 0,
  proxy_enable: false,
  proxy_outbound_host: "proxy.nx0.ca",
  proxy_outbound_port: 0,
  sip_trans_type: 0,
  srtp_encryption_option: 0,
  session_timer_refresher: 1,
  session_timer_enable: false,
  session_timer_expire: 9000,
};

export type Template = {
  accounts?: Account[];
  language: string;
  linekeys?: LineKey[];
  expansionkeys?: ExpansionKey[];
};

export const defaultTemplate: Template = {
  accounts: [],
  language: "",
  linekeys: [],
  expansionkeys: [],
};
