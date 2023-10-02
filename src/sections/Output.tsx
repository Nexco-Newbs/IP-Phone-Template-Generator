import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../App";
import Section from "../components/Section";
import styled from "styled-components";

const LineSection = styled.div`
  display: flex;
  margin: 1rem;
  gap: 2rem;
  flex-direction: column;
`;

function OutputSection() {
  const { currentTemplate }: globalContextTypes = useContext(GlobalContext);
  const accounts = currentTemplate.accounts;
  const linekeys = currentTemplate.linekeys;
  const expkeys = currentTemplate.expansionkeys;

  return (
    <Section title="Output">
      <LineSection>
        {<span>
          {currentTemplate.accounts?  <></> :<span>
            {"#!version:1.0.0.1 \n\n##File header \"#!version:1.0.0.1\" can not be edited or deleted, and must be placed in the first line.##"}
          </span>}
          </span>}
      </LineSection>
      <LineSection>
        {accounts?.map((data, index) => {
          const newindex = index + 1;
          return (
            <>
              <span>
                {"account." + newindex + ".enable = " + data.account_number}
                <br />
                {"account." + newindex + ".label = " + data.label}
                <br />
                {"account." + newindex + ".display_name = " + data.display_name}
                <br />
                {"account." +
                  newindex +
                  ".auth_name = " +
                  data.authorization_name}
                <br />
                {"account." + newindex + ".user_name = " + data.username}
                <br />
                {"account." +
                  newindex +
                  ".sip_server_host = " +
                  data.sip_server_host}
                <br />
                {"account." +
                  newindex +
                  ".sip_server." +
                  newindex +
                  ".port = " +
                  data.sip_server_port}
                <br />
                {"account." + newindex + ".path.enable = 1"}
                <br />
                {"account." + newindex + ".cid_source = " + data.cid_source}
                <br />
                {"account." + newindex + ".cp_source = " + data.cp_source}
                <br />
                <br />
                {"account." +
                  newindex +
                  ".outbound_proxy_enable = " +
                  Number(data.proxy_enable)}
                <br />
                {"account." +
                  newindex +
                  ".outbound_host = " +
                  data.proxy_outbound_host}
                <br />
                {"# port 0 will use SRV lookup"}
                <br />
                {"account." +
                  newindex +
                  ".outbound_port = " +
                  data.proxy_outbound_port}
                <br />
                <br />
                {"# Value: (0-UDP;1-TCP;2-TLS;3-DNS-NAPTR)"}
                <br />
                {"account." +
                  newindex +
                  ".sip_server." +
                  newindex +
                  ".transport_type  = " +
                  data.sip_trans_type}
                <br />
                <br />
                {"# RTP Encryption (0-Disabled;1-Optional;2-Compulsory)"}
                <br />
                {"account." +
                  newindex +
                  ".srtp_encryption = " +
                  data.srtp_encryption_option}
                <br />
                <br />
                {"#  Session Timer (works only in UAS mode)"}
                <br />
                {"account." +
                  newindex +
                  ".session_timer.enable =" +
                  Number(data.session_timer_enable)}
                <br />
                {"account." +
                  newindex +
                  ".session_timer.expires = " +
                  data.session_timer_expire}
                <br />
                {"# (0-UAC;1-UAS)"}
                <br />
                {"account." +
                  newindex +
                  ".session_timer.refresher = " +
                  data.session_timer_refresher}
              </span>
            </>
          );
        })}
      </LineSection>
      <LineSection>
        {linekeys?.map((data) => {
          return (
            <span>
              <br />
              {"linekey." + data.line_number+ ".line = " + data.line_value}
              <br />
              {"linekey." + data.line_number + ".type = " + data.type}
              <br />
              {"linekey." + data.line_number + ".value = " + data.value}
              <br />
              {"linekey." + data.line_number + ".label = " + data.label}
            </span>
          );
        })}
      </LineSection>
      <LineSection>
        {expkeys?.map((data, index) => {
          return (
            <span>
              <br />
              {"expansion_module." +
                data.module_number +
                ".key." +
                data.line_number +
                ".line = " +
                data.line_value}
              <br />
              {"expansion_module." +
                data.module_number +
                ".key." +
                data.line_number +
                ".type = " +
                data.type}
              <br />
              {"expansion_module." +
                data.module_number +
                ".key." +
                data.line_number +
                ".value = " +
                data.value}
              <br />
              {"expansion_module." +
                data.module_number +
                ".key." +
                data.line_number +
                ".label = " +
                data.label}
              <br />
            </span>
          );
        })}
      </LineSection>
      <LineSection>
        <span>
            {currentTemplate.language==="" ? "" :"lang.gui = "+currentTemplate.language}
        </span>
      </LineSection>
    </Section>
  );
}

export default OutputSection;
