export const LAYOUT_JSON = {
    "storage": [
        {
            "astId": 13,
            "contract": "contracts/2_Owner.sol:StorageLayout",
            "label": "values",
            "offset": 0,
            "slot": "0",
            "type": "t_array(t_uint8)dyn_storage"
        }
    ],
    "types": {
        "t_array(t_uint8)dyn_storage": {
            "base": "t_uint8",
            "encoding": "dynamic_array",
            "label": "uint8[]",
            "numberOfBytes": "32"
        },
        "t_uint8": {
            "encoding": "inplace",
            "label": "uint8",
            "numberOfBytes": "1"
        }
    }
}
