import User from "../../../api/user"
export const getSupplier= ({commit})=>{
    User.get().then((response)=>{
        commit('SET_DATA_SUPPLIER',response.data)
    
    })
}
export const  updateUser = ({commit},{id,data})=>{
    User.update(id,data).then(()=>{
        console.log('update success')
        commit('UPDATE_SUPPLIER',data);
    }).catch((error)=>{
        console.log(error)
    })
  
} 
export const addUser=({commit},data)=>{
    User.store(data).then(()=>{
        commit('ADD_TO_LIST',data);
        alert("Thêm Thành Công")
    })
    .catch(()=>{
        alert("thêm thất bại chú ý các trường ko đc để trống")
    })
}
export const deleteSupplier= (({commit},id)=>{
    User.destroy(id).then(()=>{
        commit('DELETE_ITEM',id);
    })
})
export const getByPage=(({commit},id)=>{
    User.getPage(id).then((response)=>{
        commit('GET_PAGE',response.data);
    })
})
