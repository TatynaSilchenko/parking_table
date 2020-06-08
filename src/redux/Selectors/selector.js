export const getSortColomn=(state)=>{
    return  state.users.sort((a,b)=>a.id>b.id?1:-1)
};
