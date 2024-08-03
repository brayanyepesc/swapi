import { AlbumListContainer } from "../AlbumListContainer/AlbumListContainer"
import { AlbumContentItems } from "./AlbumContentItems"

export const AlbumContainer = () => {
    return (
        <ul>
            {
                AlbumContentItems().map(({ id, imgUrl, sectionTitle, contentHasItems, content }) => (
                    <li key={id}>
                        <AlbumListContainer 
                            imgUrl={imgUrl}
                            sectionTitle={sectionTitle}
                            contentHasItems={contentHasItems}
                            content={content}
                        />
                    </li>
                ))
            }
        </ul>
    )
}