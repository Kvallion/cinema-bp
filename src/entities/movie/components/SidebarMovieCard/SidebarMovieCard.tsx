import { Movie } from "@entities/movie/model/movie.types"
import s from "./SidebarMovieCard.module.scss"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { MaterialIcon } from "@entities/icon"
import Link from "next/link"
import { getMovieRoute } from "@shared/routes/routes"

type SidebarMovieCardProps = Pick<
	Movie,
	"title" | "poster" | "slug" | "genres" | "rating"
> & {}

const SidebarMovieCard: React.FC<SidebarMovieCardProps> = ({
	title,
	slug,
	genres,
	rating,
	poster,
}) => {
	return (
		<Card component="li" className={s.card} elevation={0}>
			<Link href={getMovieRoute(slug)}>
				<Image
					className={s.poster}
					src={poster}
					alt={title + "poster"}
					priority
					width={65}
					height={97}
					draggable={false}
				/>
			</Link>
			<CardContent sx={{ flex: "1 0 auto" }} className={s.info}>
				<Typography component="h4" variant="h5" className={s.title}>
					{title}
				</Typography>
				<Typography
					component="span"
					variant="body2"
					className={s.genres}
				>
					{genres
						.slice(0, 4)
						.map((g) => g.name)
						.join(", ")}
					{genres.length > 4 && "..."}
				</Typography>
				<div className={s.rating}>
					<MaterialIcon name="MdStar" className={s.star} />
					<Typography component="span" variant="body2">
						{rating}
					</Typography>
				</div>
			</CardContent>
		</Card>
	)
}

export { SidebarMovieCard }
