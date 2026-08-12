class Site {
    title:string    
    description: string
    image: string
    id:number

    constructor (
        id: number, 
        image:string, 
        description:string, 
        title:string
    ){
        this.id =id
        this.image = image
        this.description = description
        this.title = title
    }
}

export default Site