import React from 'react'

const plugwallet = () => {

    //allows just for connection, not yet checking balances
    const PlugConnect  = async () => {
        try{
          if (typeof window.ic !== "undefined" && typeof window.ic.plug !== "undefined"){
            const plug = window.ic.plug;
    
            const connected = await plug.requestConnect({
              whitelist: []
            })
    
            if (connected) {
              const principal = await plug.getPrincipal()
              console.log(principal.toText())
              console.log("principle is connected as above")
      
            // const balance = await fetchBalance(principal)
    
            function shortenPrincipal(principalId) {
              const principalStr = principalId.toText();
              if (principalStr.length <= 6) {
                return principalStr; // If the ID is too short, return it as is.
              }
              const start = principalStr.slice(0, 3);
              const end = principalStr.slice(-3);
              return `${start}...${end}`;
            }
          
            const newPrin = shortenPrincipal(principal)
            console.log(newPrin)
            setShow(newPrin)
          
          }
    
          // const frntCan = "c2lt4-zmaaa-aaaaa-qaaiq-cai"
          // const bckCan ="c5kvi-uuaaa-aaaaa-qaaia-cai"
    
    
        } else {
          console.error("plug wallet not found")
        }
            }catch(error){
          console.error("Plug wallet connection failed", error)
          alert("error connection to wallet")
        }
      }

  return (
    <div>plugwallet</div>
  )
}

export default plugwallet